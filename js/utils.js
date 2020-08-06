var serviceDomain = "http://localhost:5000"

function detect(req) {
    var xhr = new XMLHttpRequest()
    var url = `${serviceDomain}/api/detect`
    xhr.open("POST", url, false)
    xhr.send(req)
    var res = xhr.responseText
    return res
}

function VNLPdetect(req) {
    var xhr = new XMLHttpRequest()
    var url = `${serviceDomain}/api/LPdetect`
    xhr.open("POST", url, false)
    xhr.send(req)
    var res = xhr.responseText
    return res
}