import { registerInDevtools, Store } from "pullstate"; 

export const UIStore = new Store({
    showModel: false,
});


registerInDevtools({
    UIStore,
})