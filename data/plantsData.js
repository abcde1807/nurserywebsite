// data/plantsData.js

const allPlantsData = [
    // HERBS
    {
        id: 1,
        name: "Aloe Vera",
        category: "succulents",
        price: 150,
        description: "A popular succulent with medicinal properties; soothing gel within its fleshy leaves.",
        image: "images/aloe-vera.jpg",
        color: "green"
    },
    {
        id: 2,
        name: "Mint",
        category: "herb",
        price: 120,
        description: "Fragrant herb known for its refreshing scent and culinary uses.",
        image: "images/mint.jpg",
        color: "green"
    },
    {
        id: 3,
        name: "Tulsi",
        category: "herb",
        price: 130,
        description: "Sacred basil in India, known for its medicinal properties and strong aroma.",
        image: "images/tulsi.jpg",
        color: "darkgreen"
    },
    {
        id: 4,
        name: "Basil",
        category: "herb",
        price: 140,
        description: "Aromatic herb widely used in Mediterranean and Asian cuisines.",
        image: "images/basil.jpg",
        color: "green"
    },
    {
        id: 5,
        name: "Oregano",
        category: "herb",
        price: 160,
        description: "Pungent, aromatic herb commonly used in Italian and Greek dishes.",
        image: "images/oregano.jpg",
        color: "green"
    },
    {
        id: 6,
        name: "Jade Plant",
        category: "succulents",
        price: 180,
        description: "Classic succulent with thick, fleshy, oval leaves, symbolizing good luck.",
        image: "images/jade.jpg",
        color: "green"
    },

    // FLOWER PLANTS
    {
        id: 7,
        name: "Rose",
        category: "flower",
        price: 250,
        description: "Classic beauty, highly fragrant and available in many colors.",
        image: "images/rose.jpg",
        color: "red"
    },
    {
        id: 8,
        name: "Marigold",
        category: "flower",
        price: 180,
        description: "Cheerful and easy-to-grow annuals in shades of yellow and orange.",
        image: "images/marigold.jpg",
        color: "orange"
    },
    {
        id: 9,
        name: "Hibiscus",
        category: "flower",
        price: 220,
        description: "Tropical plant with large, vibrant, trumpet-shaped flowers.",
        image: "images/hibiscus.jpg",
        color: "red"
    },
    {
        id: 10,
        name: "Jasmine",
        category: "flower",
        price: 200,
        description: "Known for its intensely fragrant white flowers, often used in perfumes and teas.",
        image: "images/jasmine.jpg",
        color: "white"
    },
    {
        id: 11,
        name: "Zinnia",
        category: "flower",
        price: 190,
        description: "Colorful annuals that attract butterflies, with long-lasting blooms.",
        image: "images/zinnia.jpg",
        color: "pink"
    },
    {
        id: 12,
        name: "Petunia",
        category: "flower",
        price: 210,
        description: "Prolific bloomers with trumpet-shaped flowers, great for containers.",
        image: "images/petunia.jpg",
        color: "purple"
    },
    {
        id: 13,
        name: "Peace Lily",
        category: "indoor",
        price: 230,
        description: "Elegant plant with white, sail-like spathes. Excellent air purifier.",
        image: "images/peace-lily.jpg",
        color: "white"
    },
    {
        id: 14,
        name: "Dahlia",
        category: "flower",
        price: 240,
        description: "Striking flowers known for their intricate petal arrangements and vibrant colors.",
        image: "images/dahlia.jpg",
        color: "mixed"
    },
    {
        id: 15,
        name: "Chrysanthemum",
        category: "flower",
        price: 260,
        description: "Hardy autumn flowers in a wide array of shapes and sizes.",
        image: "images/chrysanthemum.jpg",
        color: "yellow"
    },

    // TREE PLANTS
    {
        id: 16,
        name: "Neem Tree",
        category: "tree",
        price: 300,
        description: "A fast-growing evergreen tree with medicinal properties, also a natural pesticide.",
        image: "images/neem.jpg",
        color: "green"
    },
    {
        id: 17,
        name: "Mango Tree",
        category: "tree",
        price: 350,
        description: "A large evergreen tree cultivated for its sweet, juicy fruits.",
        image: "images/mango.jpg",
        color: "green"
    },
    {
        id: 18,
        name: "Guava Tree",
        category: "tree",
        price: 280,
        description: "Tropical tree known for its sweet, aromatic fruit and edible leaves.",
        image: "images/guava.jpg",
        color: "green"
    },
    {
        id: 19,
        name: "Ashoka Tree",
        category: "tree",
        price: 260,
        description: "A sacred tree in India, known for its dense foliage and beautiful flowers.",
        image: "images/ashoka.jpg",
        color: "green"
    },
    {
        id: 20,
        name: "Papaya Tree",
        category: "tree",
        price: 270,
        description: "Fast-growing, fruit-bearing tree producing sweet, orange-fleshed fruit.",
        image: "images/papaya.jpg",
        color: "green"
    },
    {
        id: 21,
        name: "Jamun Tree",
        category: "tree",
        price: 290,
        description: "Native Indian tree bearing purplish-black, tart-sweet fruits.",
        image: "images/jamun.jpg",
        color: "green"
    },
    {
        id: 22,
        name: "Bamboo",
        category: "tree",
        price: 320,
        description: "Fast-growing woody grass known for its tall, hollow stems.",
        image: "images/bamboo.jpg",
        color: "green"
    },
    {
        id: 23,
        name: "Banana Tree",
        category: "tree",
        price: 310,
        description: "Large herbaceous plant producing the popular curved yellow fruit.",
        image: "images/banana.jpg",
        color: "green"
    },

    // INDOOR PLANTS (Peace Lily is also listed as Flower, could be in both)
    {
        id: 24,
        name: "Snake Plant",
        category: "indoor",
        price: 200,
        description: "Extremely low-maintenance, ideal for beginners. Tolerates low light.",
        image: "images/snake-plant.jpg",
        color: "darkgreen"
    },
    {
        id: 25,
        name: "ZZ Plant",
        category: "indoor",
        price: 210,
        description: "Remarkably drought-tolerant and low-light adaptable, with shiny leaves.",
        image: "images/zz-plant.jpg",
        color: "darkgreen"
    },
    {
        id: 26,
        name: "Spider Plant",
        category: "indoor",
        price: 230,
        description: "Easy to grow, produces 'spiderettes'. Great for hanging baskets.",
        image: "images/spider-plant.jpg",
        color: "lightgreen"
    },
    {
        id: 27,
        name: "Areca Palm",
        category: "indoor",
        price: 220,
        description: "Popular indoor plant known for its air-purifying qualities and lush fronds.",
        image: "images/areca-palm.jpg",
        color: "green"
    },
    {
        id: 28,
        name: "Lucky Bamboo",
        category: "indoor",
        price: 210,
        description: "Symbol of good fortune, easy to care for and can be grown in water.",
        image: "images/lucky-bamboo.jpg",
        color: "green"
    },
    {
        id: 29,
        name: "Rubber Plant",
        category: "indoor",
        price: 240,
        description: "Bold, glossy-leaved plant that adds drama and purifies air.",
        image: "images/rubber-plant.jpg",
        color: "burgundy"
    },
    {
        id: 30,
        name: "Money Plant",
        category: "indoor",
        price: 190,
        description: "Believed to bring good luck and prosperity. Very easy to grow.",
        image: "images/money-plant.jpg",
        color: "green"
    },

    // DECORATIVE PLANTS (These are now mostly unique from other categories, except where cross-categorization makes sense like succulents)
    {
        id: 31,
        name: "Croton",
        category: "decorative",
        price: 230,
        description: "Vibrant foliage plant known for its brightly colored leaves in red, orange, and yellow.",
        image: "images/croton.jpg",
        color: "mixed"
    },
    {
        id: 32,
        name: "Succulent Mix",
        category: "succulents",
        price: 190,
        description: "Assorted small, drought-tolerant plants perfect for sunny spots and arrangements.",
        image: "images/succulent.jpg",
        color: "mixed"
    },
    {
        id: 33,
        name: "Cactus",
        category: "succulents",
        price: 180,
        description: "Hardy desert plants in various shapes and sizes, requiring minimal water.",
        image: "images/cactus.jpg",
        color: "green"
    },
    {
        id: 34,
        name: "Calathea",
        category: "decorative",
        price: 210,
        description: "Known for its strikingly beautiful, patterned leaves, adding a tropical touch.",
        image: "images/calathea.jpg",
        color: "green"
    },
    {
        id: 35,
        name: "Fittonia",
        category: "decorative",
        price: 200,
        description: "Also known as nerve plant, features intricate vein patterns on its leaves.",
        image: "images/fittonia.jpg",
        color: "pinkgreen"
    },
    {
        id: 36,
        name: "Syngonium",
        category: "decorative",
        price: 220,
        description: "Vibrant foliage with arrowhead-shaped leaves, available in various colors and patterns.",
        image: "images/syngonium.jpg",
        color: "pinkgreen"
    },
    {
        id: 37,
        name: "Dieffenbachia",
        category: "decorative",
        price: 240,
        description: "Features large, striking leaves with patterns of green, cream, and yellow.",
        image: "images/dieffenbachia.jpg",
        color: "green"
    },
    {
        id: 38,
        name: "Anthurium",
        category: "decorative",
        price: 250,
        description: "Features glossy, heart-shaped 'flowers' (spathes) in red, pink, or white.",
        image: "images/anthurium.jpg",
        color: "red"
    }
];