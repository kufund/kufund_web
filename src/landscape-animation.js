export function animateLandscape(svg) {
  const query = window.matchMedia('(min-width: 1001px) and (prefers-reduced-motion: no-preference)')
  const paths = [...svg.querySelectorAll('.landscape-contours > path')]
  const face = svg.querySelector('[fill="url(#terrain-face)"]')
  const glow = svg.querySelector('ellipse')
  const length = paths[0].getTotalLength()
  const clip = document.createElementNS(svg.namespaceURI, 'clipPath')
  clip.id = 'terrain-drawing-reveal'
  clip.setAttribute('clipPathUnits', 'userSpaceOnUse')
  const rect = document.createElementNS(svg.namespaceURI, 'rect')
  rect.setAttribute('height', '580')
  rect.setAttribute('width', '560')
  clip.append(rect)
  svg.querySelector('defs').append(clip)
  face.setAttribute('clip-path', 'url(#terrain-drawing-reveal)')
  const delays = paths.map(path => parseFloat(path.style.getPropertyValue('--contour-delay')) * 1000)
  const revealDuration = 2400 + Math.max(...delays)
  const contourGroup = svg.querySelector('.landscape-contours')
  // A separate highlight layer flows along the finished contours.
  const flowGroup = document.createElementNS(svg.namespaceURI, 'g')
  flowGroup.setAttribute('mask', 'url(#terrain-edges)')
  flowGroup.setAttribute('fill', 'none')
  flowGroup.setAttribute('stroke', '#f0d89d')
  flowGroup.setAttribute('stroke-width', '1')
  flowGroup.setAttribute('stroke-linecap', 'round')
  flowGroup.style.opacity = '0'
  const flowPaths = paths.map(path => {
    const flow = document.createElementNS(svg.namespaceURI, 'path')
    flow.setAttribute('d', path.getAttribute('d'))
    flow.setAttribute('pathLength', '1')
    flow.style.strokeDasharray = '0.18 0.82'
    flowGroup.append(flow)
    return flow
  })
  contourGroup.after(flowGroup)
  let frame
  function complete() {
    contourGroup.style.removeProperty('opacity')
    face.style.removeProperty('opacity')
    paths.forEach(path => {
      path.style.removeProperty('stroke-dasharray')
      path.style.removeProperty('stroke-dashoffset')
    })
    rect.setAttribute('width', '560')
    glow.style.removeProperty('opacity')
  }
  function render(elapsed) {
    const progress = delay => {
      const t = Math.min(1, Math.max(0, (elapsed - delay) / 2400))
      return 1 - (1 - t) ** 3
    }
    paths.forEach((path, index) => {
      path.style.strokeDasharray = '1'
      path.style.strokeDashoffset = String(1 - progress(delays[index]))
    })
    const leading = progress(delays[0])
    const tip = paths[0].getPointAtLength(length * leading)
    // SVG view-box coordinates keep the fill exactly behind the drawing tip.
    const x = leading === 0 ? 0 : tip.x
    rect.setAttribute('width', String(x))
    glow.style.opacity = String(leading)
  }
  function start() {
    cancelAnimationFrame(frame)
    flowGroup.style.opacity = '0'
    if (!query.matches) { complete(); return }
    render(0)
    let startTime
    function tick(time) {
      startTime ??= time
      const elapsed = time - startTime
      if (elapsed < revealDuration) {
        render(elapsed)
      } else {
        if (!revealed) { complete(); revealed = true }
        const flowTime = elapsed - revealDuration
        flowGroup.style.opacity = String(0.62 * Math.min(1, flowTime / 1600))
        flowPaths.forEach((path, index) => {
          // Negative offsets carry the highlight from left to right; the
          // repeating dash spacing wraps seamlessly without erasing the line.
          path.style.strokeDashoffset = String(-(flowTime / 5200 - index * 0.025))
          // Gentle staggered brightening keeps the finished terrain readable.
          path.style.opacity = String(0.75 + 0.25 * Math.sin(flowTime / 5200 * Math.PI * 2 - index * 0.3))
        })
      }
      frame = requestAnimationFrame(tick)
    }
    let revealed = false
    frame = requestAnimationFrame(tick)
  }
  query.addEventListener('change', start)
  start()
  return () => {
    cancelAnimationFrame(frame)
    query.removeEventListener('change', start)
    complete()
    face.removeAttribute('clip-path')
    clip.remove()
    flowGroup.remove()
  }
}
