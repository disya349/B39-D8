var angka = 7;

console.log(angka)

function getData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let telpon = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    let emailReceiver = "dicki.syaf@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hi, my name is ${name},
    ${message} Please reach me on ${email} or ${telpon}`

    a.click()
}