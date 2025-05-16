import { registerInDevtools, Store } from "pullstate"; 

export const UIStore = new Store({
    showModel: false,
});

export const Category = new Store({
     CategoryList: [
        "ELECTRICIAN",
        "PLUMBER",
        "TEACHER",
        "RECEPTIONIST",
        "OFFICE STAFF",
        "MECHANIC",
        "ENGINEER",
        "DRIVER",
        "DELIVERY BOY",
        "TAILOR",
        "GUARD",
        "BARBER",
        "CARE TAKER",
        "LABOURS",
        "TECHNICIAN",
        "TIFFIN SERVICES",
        "ARTIST",
        "BEAUTICIAN",
        "TRAINER",
        "MEDICAL SERVICES",
        "PHOTOGRAPHER",
        "CARPENTER",
        "RAJ MISTRY",
        "TENT SERVICES",
        "DECORATION",
        "CATERING",
        "DANCE TRAINER"
      ],
})


registerInDevtools({
    UIStore,
    Category
})