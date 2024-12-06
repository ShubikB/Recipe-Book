import "./App.css"
import RecipeCard from "./RecipeCard.jsx"
import Greetings from "./greetings.jsx"

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
]

const App = () => {
  return (
    <>
      <Greetings userName='Shubik' />
      <div className='w-full h-full flex flex-wrap justify-center item-center'>
        {recipes.map((dish) => (
          <RecipeCard name={dish.name} image={dish.image} />
        ))}
      </div>
    </>
  )
}

export default App
