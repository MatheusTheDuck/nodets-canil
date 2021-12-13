type MenuOptions = ''|'all'|'dog'|'cat'|'fish';

export const CreateMenuObeject = (activeMenu:MenuOptions)=>{
let retunrObj={
    all:false,
    dog:false,
    cat:false,
    fish:false
};
if(activeMenu !==''){
    retunrObj[activeMenu] = true;
}
return retunrObj;
}