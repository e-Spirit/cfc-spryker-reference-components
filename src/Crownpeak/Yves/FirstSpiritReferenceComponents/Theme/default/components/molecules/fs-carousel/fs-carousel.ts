import Component from "ShopUi/models/component";

export default class FsCarousel extends Component {

    protected readyCallback(): void {

        const container: HTMLElement = this.querySelector('.fs-carousel-container');
        const autoplayInterval: number = parseInt(container?.getAttribute('data-autoplay-interval'));

        if (isNaN(autoplayInterval)) return;
        
        if (container) {
            let timerId = setInterval(function () {
                container.scrollLeft = container.scrollLeft >= (container.querySelectorAll('fs-banner').length - 1) * container.offsetWidth ? 0 : container.scrollLeft + container.offsetWidth;
            }, autoplayInterval);
            container.addEventListener('mousedown', function () {
                clearInterval(timerId);
            }, {once: true});
        }
    }
}
