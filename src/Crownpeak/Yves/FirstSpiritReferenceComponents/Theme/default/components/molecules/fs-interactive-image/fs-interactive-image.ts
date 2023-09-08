import Component from 'ShopUi/models/component';

export default class FsShoppableImage extends Component {

    protected readyCallback(): void {
        const pois: NodeListOf<HTMLElement> = this.querySelectorAll("a.poi");
        const products: NodeListOf<HTMLElement> = this.querySelectorAll("fs-shoppable-image .product");

        pois.forEach(function (poi) {
            poi.onclick = function(event) {
                const href = poi.getAttribute('href');
                const elementToShow : HTMLElement = poi.parentElement.querySelector(href);
                const visibility = elementToShow.style.visibility === 'visible' ? 'hidden' : 'visible';

                products.forEach(function (product) {
                    product.style.visibility = 'hidden';

                });
                elementToShow.style.visibility = visibility;
                event.preventDefault();
            };

        });
        let closeBtns : NodeListOf<HTMLElement> = this.querySelectorAll(".close-thin");
        closeBtns.forEach(function (closeBtn) {
            closeBtn.onclick = function () {
                closeBtn.parentElement.style.visibility = 'hidden';
            };

        });
    }
}
