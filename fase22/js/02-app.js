document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( (entries) => {
        console.log(entries[0])

        if(entries[0].isIntersecting) {
            console.log('ya ta visible papi')
        }

    })

    observer.observe(document.querySelector('.premium'))

})