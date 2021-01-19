const e = require("express");

class Menu{

    addMenuItem(name, path, text, icon = '', parent = ''){

        let item = {
            name,
            path,
            text,
            icon: icon == '' ? undefined : icon,
            children: []
        };

        if(parent != ''){
            this.menu.foreach((index, menuItem) => {
                if(menuItem.name == parent){
                    menuItem.children.push(item);
                    break;
                }
            });
        }else{
            this.menu.push(item);
        }
    }
}

module.exports = Menu;