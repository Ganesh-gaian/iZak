function toggleAccordion(id) {
    const accordionItem = document.getElementById(id);
    const header = accordionItem.querySelector('.accordion-header');
    const content = accordionItem.querySelector('.accordion-content');

    header.classList.toggle('active');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
