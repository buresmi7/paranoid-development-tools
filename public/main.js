document.getElementById('encode-button').addEventListener("click", () => {
    const encoded = btoa(document.getElementById('raw-input').value)
    document.getElementById('encoded-base64').value = encoded
}, false);

document.getElementById('decode-button').addEventListener("click", () => {
    try {
        const decoded = atob(document.getElementById('base64-input').value)
        document.getElementById('decoded-base64').value = decoded
    } catch (e) {
        document.getElementById('decoded-base64').value = `Decode error: ${e.message}`
    }
}, false);

document.getElementById('yaml-to-json-button').addEventListener("click", () => {
    try {
        const yaml = document.getElementById('yaml-to-json-input').value
        const result = jsyaml.load(yaml)
        document.getElementById('yaml-to-json-output').innerHTML = prettyPrintJson.toHtml(result, {quoteKeys: true,indent: 2})
    } catch (e) {
        document.getElementById('yaml-to-json-output').innerHTML = `Convert error: ${e.message}`
    }
}, false);

document.getElementById('json-to-yaml-button').addEventListener("click", () => {
    try {
        const json = document.getElementById('json-to-yaml-input').value
        jsonlint.parse(json)
        const result = YAML.stringify(JSON.parse(json), 100, 2)

        document.getElementById('json-to-yaml-output').innerHTML = result
    } catch (e) {
        document.getElementById('json-to-yaml-output').innerHTML = `Convert error: ${e.message}`
    }
}, false);

document.getElementById('text-to-url-button').addEventListener("click", () => {
    const output = encodeURIComponent(document.getElementById('text-to-url-input').value)
    document.getElementById('text-to-url-output').value = output
}, false);