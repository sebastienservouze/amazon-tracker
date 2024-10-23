export abstract class Pages {

    public static readonly DASHBOARD = {
        route: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
    }

    public static readonly SCAN = {
        route: '/scan',
        label: 'Scan',
        icon: 'find_in_page',
    }

    public static readonly PRODUCTS = {
        route: '/products',
        label: 'Produits',
        icon: 'track_changes',
    }

    public static readonly LOGOUT = {
        route: '/logout',
        label: 'Déconnexion',
        icon: 'exit_to_app',
    }

}

export type Page = {
    label: string,
    icon: string,
    route: string,
}