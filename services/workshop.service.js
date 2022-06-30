// ---------------------------------------------------------------
// ---------------- CREATE WORKSHOP SERVICE -------------------
// ---------------------------------------------------------------
exports.create_workshop_service = async (req) => {
  const {
    title,
    date,
    total_seats_available,
    price_per_seat,
    language_of_workshop,
    online_workshop,
    organizer_name,
    contact_information,
  } = req?.body;

  var update_workshop_object = {};

  if (title) {
    update_workshop_object.title = title;
  }
  if (date) {
    update_workshop_object.date = date;
  }
  if (total_seats_available) {
    update_workshop_object.total_seats_available = total_seats_available;
  }
  if (price_per_seat) {
    update_workshop_object.price_per_seat = price_per_seat;
  }
  if (language_of_workshop) {
    update_workshop_object.language_of_workshop = language_of_workshop;
  }
  if (online_workshop) {
    update_workshop_object.online_workshop = online_workshop;
  }
  if (organizer_name) {
    update_workshop_object.organizer_name = organizer_name;
  }
  if (Object.keys(contact_information).length > 0) {
    update_workshop_object.contact_information = contact_information;
  }

  return {
    update_workshop_object,
  };
};
