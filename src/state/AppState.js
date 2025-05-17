import { registerInDevtools, Store } from "pullstate"; 

export const UIStore = new Store({
    showModel: false,
});



export const Category = new Store({
    categorizedProfessions : {
        "Technical Services": ["ELECTRICIAN", "PLUMBER", "MECHANIC", "ENGINEER", "TECHNICIAN", "CARPENTER", "RAJ MISTRY"],
        "Education": ["TEACHER", "TRAINER", "DANCE TRAINER"],
        "Office & Support": ["RECEPTIONIST", "OFFICE STAFF", "GUARD"],
        "Delivery & Driving": ["DRIVER", "DELIVERY BOY"],
        "Personal Services": ["TAILOR", "BARBER", "BEAUTICIAN", "CARE TAKER"],
        "Food Services": ["TIFFIN SERVICES", "CATERING"],
        "Event Services": ["TENT SERVICES", "DECORATION"],
        "Creative Services": ["ARTIST", "PHOTOGRAPHER"],
        "Medical Services": ["MEDICAL SERVICES"],
        "General Labor": ["LABOURS"]
    },
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
    Category,
})