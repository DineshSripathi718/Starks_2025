
const createContactCard = (contact) => {
    return `<div class="contact-container">
                <div class="image-container">
                    <img src=${contact.photo} alt=${contact.firstName+" "+contact.lastName}>
                </div>
                <div class="details-container">
                    <div class="name">${contact.firstName+" "+contact.lastName}</div>
                    <div class="tags-container">
                        ${
                            contact.tags.map(
                                tag => {
                                    return `<div class="tag">${tag}</div>`
                                }
                            ).join("")
                        }
                    </div>
                </div>
                <div class="button-container view-contact-details">
                    <a contact-id = ${contact.id} href="./viewContact.html" class="cta">view contact</a>
                </div>
            </div>`
}

export default createContactCard