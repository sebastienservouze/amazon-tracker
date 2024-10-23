export abstract class Pages {

    public static readonly DASHBOARD = {
        label: 'Dashboard',
        icon: 'dashboard',
    }

    public static readonly SCAN = {
        label: 'Scan',
        icon: 'find_in_page',
    }

    public static readonly TRACKERS = {
        label: 'Trackers',
        icon: 'track_changes',
    }

    public static readonly LOGOUT = {
        label: 'Déconnexion',
        icon: 'exit_to_app',
    }

}

export type Page = {
    label: string,
    icon: string,
}