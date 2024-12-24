import "./App.css"
import Hero from "./assets/components/hero"
import RecipeCard from "./assets/components/RecipeCard"
// import RecipePopup from "./assets/components/RecipePopup"

// array of object of the recipes
const recipes = [
  {
    name: "Spaghetti Carbonara",
    image:
      "https://www.allrecipes.com/thmb/Y7ftij8uq7sM2VpxGt-RHZg3yaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-mfs-042-21d5decdffde4a1faa94a21725ce9cc3.jpg",
    origin: "Italy",
    timeToCook: "25 minutes",
    ingredients: [
      "400g spaghetti",
      "150g pancetta or bacon, diced",
      "2 large eggs",
      "1 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and black pepper",
      "2 tbsp olive oil",
    ],
    steps: [
      "Cook spaghetti in salted boiling water until al dente. Reserve 1 cup of pasta water, then drain.",
      "Heat olive oil in a pan, sauté pancetta until crispy, and add garlic.",
      "In a bowl, whisk eggs, Parmesan, and a generous amount of black pepper.",
      "Toss spaghetti with pancetta and remove the pan from heat. Mix in the egg mixture, stirring quickly to avoid scrambling.",
      "Add reserved pasta water to adjust consistency. Serve immediately with extra Parmesan.",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    image:
      "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",

    origin: "India",
    timeToCook: "40 minutes",
    ingredients: [
      "500g chicken thighs, diced",
      "1 cup plain yogurt",
      "2 tbsp garam masala",
      "1 tbsp turmeric",
      "1 tbsp cumin",
      "1 tbsp paprika",
      "1 can (400g) tomato puree",
      "1 cup heavy cream",
      "2 tbsp butter",
      "2 garlic cloves, minced",
      "1 onion, finely chopped",
      "Salt and pepper",
    ],
    steps: [
      "Marinate chicken in yogurt, garam masala, turmeric, cumin, and paprika for at least 1 hour.",
      "Cook marinated chicken in a hot pan until browned; set aside.",
      "Sauté onion and garlic in butter, then add tomato puree and cook for 10 minutes.",
      "Stir in cream, season with salt and pepper, and return chicken to the pan. Simmer for 15 minutes. Serve with rice or naan.",
    ],
  },
  {
    name: "Sushi Rolls",
    image:
      "https://japan.recipetineats.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg",

    origin: "Japan",
    timeToCook: "30 minutes",
    ingredients: [
      "2 cups sushi rice",
      "3 tbsp rice vinegar",
      "4 nori sheets",
      "1 cucumber, julienned",
      "1 avocado, sliced",
      "200g fresh raw fish (salmon or tuna) or crab sticks",
      "Soy sauce, wasabi, and pickled ginger for serving",
    ],
    steps: [
      "Rinse and cook sushi rice, then season with rice vinegar and let cool.",
      "Place a nori sheet on a bamboo mat. Spread rice evenly, leaving a 2cm border at the top.",
      "Add fillings (cucumber, avocado, fish) in the center.",
      "Roll tightly using the bamboo mat. Slice into pieces and serve with soy sauce, wasabi, and pickled ginger.",
    ],
  },
  {
    name: "Beef Tacos",
    image: "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg",

    origin: "Mexico",
    timeToCook: "20 minutes",
    ingredients: [
      "300g ground beef",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 tomato, diced",
      "1 cup shredded cheese",
      "Salsa and sour cream",
    ],
    steps: [
      "Cook beef, onion, and garlic in a skillet until browned.",
      "Add chili powder, cumin, salt, and 2 tbsp water. Simmer for 5 minutes.",
      "Fill taco shells with beef, lettuce, tomato, cheese, and toppings of choice.",
    ],
  },
  {
    name: "Pad Thai",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-pad-thai-190%2Fpad-thai-190-251",

    origin: "Thailand",
    timeToCook: "30 minutes",
    ingredients: [
      "200g rice noodles",
      "200g shrimp or chicken",
      "2 eggs, beaten",
      "1 cup bean sprouts",
      "2 tbsp fish sauce",
      "1 tbsp tamarind paste",
      "2 tbsp soy sauce",
      "3 tbsp sugar",
      "2 garlic cloves, minced",
      "Crushed peanuts and lime wedges for garnish",
    ],
    steps: [
      "Soak noodles in warm water until soft; drain.",
      "Sauté garlic and shrimp/chicken in oil until cooked. Push to the side.",
      "Add eggs, scramble, then mix with meat.",
      "Add noodles, sauces, tamarind paste, and sugar. Toss until coated. Top with peanuts and lime.",
    ],
  },
  {
    name: "Momo",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Chicken-momos-1ed8358.jpg?resize=900%2C471",
    origin: "Nepal",
    timeToCook: "40 minutes",
    ingredients: [
      "250g minced chicken or vegetables",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 tsp ginger paste",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
      "200g flour",
      "Water for dough",
    ],
    steps: [
      "Mix flour and water to form a soft dough. Rest for 20 minutes.",
      "Combine filling ingredients (minced chicken/veg, onion, garlic, ginger, soy sauce, sesame oil).",
      "Roll dough into small circles, fill with mixture, and seal edges to form dumplings.",
      "Steam for 10-12 minutes and serve with dipping sauce.",
    ],
  },
  {
    name: "Dal Bhat",
    image:
      "https://cdn.shopify.com/s/files/1/0223/0981/files/Dal_Bhat_in_Nepal_lentils_and_rice_served_on_brass_trays.jpg?v=1618366744",
    origin: "Nepal",
    timeToCook: "50 minutes",
    ingredients: [
      "1 cup lentils (dal)",
      "1 tsp turmeric",
      "Salt to taste",
      "2 cups cooked rice (bhat)",
      "Vegetables for curry or stir-fry",
      "Pickles and chutneys for serving",
    ],
    steps: [
      "Cook lentils with water, turmeric, and salt until soft.",
      "Prepare vegetable curry or stir-fry as a side.",
      "Serve rice with dal, vegetables, and pickles.",
    ],
  },
  {
    name: "Butter Chicken",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
    origin: "India",
    timeToCook: "1 hour",
    ingredients: [
      "500g chicken, boneless",
      "1 cup yogurt",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp red chili powder",
      "3 tbsp butter",
      "1 cup tomato puree",
      "1/2 cup cream",
      "Salt to taste",
    ],
    steps: [
      "Marinate chicken with yogurt, garam masala, turmeric, and chili powder for 30 minutes.",
      "Cook chicken in butter until golden. Remove and set aside.",
      "In the same pan, sauté tomato puree and spices. Add cream and cooked chicken.",
      "Simmer until sauce thickens. Serve with naan or rice.",
    ],
  },
  {
    name: "Chole Bhature",
    image:
      "https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg",
    origin: "India",
    timeToCook: "1 hour",
    ingredients: [
      "1 cup chickpeas, soaked overnight",
      "2 onions, chopped",
      "2 tomatoes, pureed",
      "2 tsp garam masala",
      "1 tsp cumin seeds",
      "2 cups all-purpose flour",
      "1/4 cup yogurt",
      "Salt to taste",
      "Oil for frying",
    ],
    steps: [
      "Boil chickpeas until soft. Sauté onions, tomatoes, and spices to make a thick curry.",
      "Make dough with flour, yogurt, and salt. Rest for 20 minutes.",
      "Roll dough into circles and deep fry until puffed.",
      "Serve chickpea curry with hot bhature.",
    ],
  },
  {
    name: "Saag Aloo",
    image: "https://rainbowplantlife.com/wp-content/uploads/2024/01/Hero-2-scaled.jpg",
    origin: "India",
    timeToCook: "35 minutes",
    ingredients: [
      "500g spinach",
      "3 potatoes, diced",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "1 tsp chili powder",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "Salt to taste",
    ],
    steps: [
      "Boil potatoes until tender.",
      "Sauté cumin seeds, onions, garlic, and spices in oil.",
      "Add spinach and cooked potatoes. Cook until spinach wilts and combines.",
      "Serve as a side dish or with rice.",
    ],
  },
  {
    name: "Chicken Biryani",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSq7xy12Os8TQS61-RKVGtoDoUHt7JqZojsg&s",
    origin: "India",
    timeToCook: "1.5 hours",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken or vegetables",
      "1 cup yogurt",
      "2 onions, fried",
      "2 tsp biryani masala",
      "Saffron soaked in milk",
      "4 tbsp ghee",
      "Salt to taste",
    ],
    steps: [
      "Marinate chicken/vegetables with yogurt, biryani masala, and salt.",
      "Partially cook rice with whole spices. Layer rice, chicken, and fried onions.",
      "Drizzle with saffron milk and ghee. Cook on low heat until flavors blend.",
      "Serve hot with raita.",
    ],
  },
  {
    name: "Pani Puri",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLf40t2rOzTqiIY0Br3Pnmm3WmSP9e09ggA&s",
    origin: "India",
    timeToCook: "45 minutes",
    ingredients: [
      "20 puris (fried puffed bread)",
      "1 cup boiled potatoes, mashed",
      "1/2 cup boiled chickpeas",
      "1 cup tamarind chutney",
      "1 cup mint water (with spices)",
      "Salt to taste",
    ],
    steps: [
      "Prepare filling by mixing mashed potatoes, chickpeas, and spices.",
      "Make mint water by blending mint, tamarind, and spices with water.",
      "Fill puris with potato mixture and pour mint water over them.",
      "Serve immediately.",
    ],
  },
]

const App = () => {
  return (
    <>
      <Hero />

      <div className='w-full h-full flex flex-wrap justify-center item-center'>
        {recipes.map((recipe) => (
          <RecipeCard name={recipe.name} image={recipe.image} recipe={recipe} />
        ))}
      </div>
    </>
  )
}

export default App
