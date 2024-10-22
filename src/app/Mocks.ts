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
    ];

    public static products: Product[] = [
        {
            id: 15,
            createdAt: "2024-10-22T17:24:53.360Z",
            updatedAt: "2024-10-22T17:24:53.360Z",
            deletedAt: null,
            amazonId: "B0CSDN1GS8",
            name: "RTX 4070 Ti SUPER 16G VENTUS 2X WHITE OC",
            url: "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDN1GS8?th=1",
            priceChanges: [
                {
                    id: 10,
                    createdAt: "2024-10-22T17:24:53.360Z",
                    updatedAt: "2024-10-22T17:24:53.360Z",
                    deletedAt: null,
                    oldPrice: 916.8,
                    newPrice: 916.8
                }
            ]
        },
        {
            id: 16,
            createdAt: "2024-10-22T17:24:53.360Z",
            updatedAt: "2024-10-22T17:24:53.360Z",
            deletedAt: null,
            amazonId: "B0CSDPXMKS",
            name: "RTX 4070 Ti SUPER 16G GAMING X SLIM",
            url: "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDPXMKS",
            priceChanges: [
                {
                    id: 11,
                    createdAt: "2024-10-22T17:24:53.360Z",
                    updatedAt: "2024-10-22T17:24:53.360Z",
                    deletedAt: null,
                    oldPrice: 960.98,
                    newPrice: 960.98
                }
            ]
        },
        {
            id: 17,
            createdAt: "2024-10-22T17:24:53.360Z",
            updatedAt: "2024-10-22T17:24:53.360Z",
            deletedAt: null,
            amazonId: "B0CSDNGRXY",
            name: "RTX 4070 Ti SUPER 16G GAMING X SLIM WHITE",
            url: "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSDNGRXY",
            priceChanges: [
                {
                    id: 12,
                    createdAt: "2024-10-22T17:24:53.360Z",
                    updatedAt: "2024-10-22T17:24:53.360Z",
                    deletedAt: null,
                    oldPrice: 967.55,
                    newPrice: 967.55
                }
            ]
        },
        {
            id: 18,
            createdAt: "2024-10-22T17:24:53.360Z",
            updatedAt: "2024-10-22T17:24:53.360Z",
            deletedAt: null,
            amazonId: "B0CSKD1366",
            name: "RTX 4070 Ti SUPER 16G VENTUS 2X OC",
            url: "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CSKD1366",
            priceChanges: [
                {
                    id: 13,
                    createdAt: "2024-10-22T17:24:53.360Z",
                    updatedAt: "2024-10-22T17:24:53.360Z",
                    deletedAt: null,
                    oldPrice: 877.97,
                    newPrice: 877.97
                }
            ]
        },
        {
            id: 19,
            createdAt: "2024-10-22T17:24:53.360Z",
            updatedAt: "2024-10-22T17:24:53.360Z",
            deletedAt: null,
            amazonId: "B0CQMRVZ3M",
            name: "RTX 4070 Ti SUPER 16G VENTUS 3X OC",
            url: "https://www.amazon.fr/MSI-GeForce-Super-Ventus-Graphique/dp/B0CQMRVZ3M",
            priceChanges: [
                {
                    id: 14,
                    createdAt: "2024-10-22T17:24:53.360Z",
                    updatedAt: "2024-10-22T17:24:53.360Z",
                    deletedAt: null,
                    oldPrice: 975.15,
                    newPrice: 975.15
                }
            ]
        }
    ];
}