let counter = 0;
let contacts = [];
function addContact(name, phone) {
    contacts.push({
        name,
        phone,
        id: ++counter
    });
}

function createHtmlElement(name, phone) {
    addContact(name, phone);
    let pName = $(`<p data-role="contact-name">${name}<p>`);
    let pPhone = $(`<p data-role="contact-phone">${phone}<p>`);
    let removeButton = $('<button>Remove</button>').click(function () {
        $(this).parent().remove();
    });
    let editButton = $('<button>Edit</button>').click(function () {
        let editName = $(`<input type="text" value=${$(this).siblings("p[data-role=contact-name]").text()}>`)
        let editPhone = $(`<input type="tel"> value=${$(this).siblings("p[data-role=contact-phone]").text()}`);
        $(this).parent().append([editName, editPhone])
    });
    $("[data-role=contacts-container]").append($('<div>').append([pName, pPhone, removeButton, editButton]))
    $('input').val("")
}
$("[data-role=add-contact-btn]").click(function () {
    const name = $("[data-role=userName]").val(), phone = $("[data-role=phone]").val();
    if (!name || !phone) {
        alert("please fill the fields..");
        return;
    }
    createHtmlElement(name, phone)
})

// setTimeout(function () {
//     $.getJSON("https://raw.githubusercontent.com/blackcolt/hackerU/main/contacts.json",
//     function (contacts) {
//         parseContacts(contacts);
//     })
// }, 1000)

// function parseContacts(contacts){
//     $.each(contacts,function(_, contact){
//         createHtmlElement(contact.name, contact.phone)
//     });
// }
