import { MenuInterace } from './menu.interace'

export  class MenuItems {
    private static readonly MENU: Array<MenuInterace> = [
        {title: 'Patients', route: '/patients'},
        {title: 'Doctors', route: '/doctors'},
        {title: 'Locations', route: '/locations'},
        {title: 'FAQ', route: '/faqs'}
    ];
    public static getMenu(): Array<MenuInterace> {
        return this.MENU;
    }
}