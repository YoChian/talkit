import { reactive } from "vue";

export const globalVar=reactive({
    profilePopover:
    {
        isShow:false,
        x:0,
        y:0,
    },
    loginStatus:
    {
        loggedin:false,
        account:"",
        nickname:"",
    },
    profilePopoverUpdate(show,X,Y)
    {
        this.profilePopover.isShow=show;
        this.profilePopover.x=X;
        this.profilePopover.y=Y;
    },
})