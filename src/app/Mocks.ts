import {ProductDiscovery} from "./models/ProductDiscovery.model";

export abstract class Mocks {
    public static discoveries: ProductDiscovery[] = [
        {
            "amazonId": "B0CQMRVZ3M",
            "url": "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CQMRVZ3M",
            "name": "RTX 4070 Ti SUPER 16G VENTUS 3X OC",
            "price": 940.98
        },
        {
            "amazonId": "B0CSDPXMKS",
            "name": "RTX 4070 Ti SUPER 16G GAMING X SLIM",
            "url": "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDPXMKS"
        },
        {
            "amazonId": "B0CSDNGRXY",
            "name": "RTX 4070 Ti SUPER 16G GAMING X SLIM WHITE",
            "price": 967.55,
            "url": "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDNGRXY"
        },
        {
            "amazonId": "B0CSKD1366",
            "name": "RTX 4070 Ti SUPER 16G VENTUS 2X OC",
            "price": 877.97,
            "url": "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSKD1366"
        },
        {
            "amazonId": "B0CSDN1GS8",
            "name": "RTX 4070 Ti SUPER 16G VENTUS 2X WHITE OC",
            "price": 916.8,
            "url": "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDN1GS8"
        }
    ]
}