export default function deleteBr () {
    const matchMedia = window.matchMedia ('(max-width:1201px')
    if (matchMedia.matches) {
const footerReq = document.querySelector('.footer_info');
footerReq.remove('br')
}
}