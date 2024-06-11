function translatePage(lang) {
    var translate_element = document.querySelector('#google_translate_element select');
    if (translate_element) {
        for (var i = 0; i < translate_element.options.length; i++) {
            if (translate_element.options[i].value.indexOf(lang) > -1) {
                translate_element.selectedIndex = i;
                translate_element.dispatchEvent(new Event('change'));
                break;
            }
        }
    }
}