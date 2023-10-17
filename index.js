gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.description',
        start: 'top center'
    }
})
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.cd-title',
        start: 'top center'
    }
})

tl.fromTo(
    '.left-cont',
    {
        opacity: 0,
        y: 200,
    },
    {
        opacity: 1,
        y: 0
    },
    '<50%'
)
tl.fromTo(
    '.right-cont',
    {
        opacity: 0,
        x: 200,
    },
    {
        opacity: 1,
        x: 0
    }
)

tl1.fromTo(
    '.cd',
    {
        opacity: 0,
        y: 100
    },
    {
        opacity: 1,
        y: 0
    }
)

tl2.fromTo(
    '.card-1',
    {
        opacity: 0,
        x: -100
    },
    {
        opacity: 1,
        x: 0
    }
)
tl2.fromTo(
    '.card-2',
    {
        opacity: 0,
        x: 100
    },
    {
        opacity: 1,
        x: 0
    }
)
