/*********************************************************************

SECTION 1 — CHILD COMPONENT
File: Card.jsx

This component RECEIVES data using PROPS.

Props = properties sent from another component.

*********************************************************************/

function Card({ title, description, price, buttonText, bgColor }) {

  /*
  React receives props from the parent component.

  Example from parent:

  <Card
      title="Pro Plan"
      description="Best for developers"
      price="$29/month"
      buttonText="Buy Now"
      bgColor="bg-purple-600"
  />

  React converts this internally to:

  Card({
      title: "Pro Plan",
      description: "Best for developers",
      price: "$29/month",
      buttonText: "Buy Now",
      bgColor: "bg-purple-600"
  })

  These values are then available inside this component.
  */

  return (

    // bgColor is dynamic (comes from props)
    <div className={`rounded-xl p-6 shadow-lg ${bgColor}`}>

      {/* Title received from parent */}
      <h2 className="text-xl font-bold mb-2 text-white">
        {title}
      </h2>

      {/* Description received from parent */}
      <p className="text-sm text-white/90 mb-4">
        {description}
      </p>

      {/* Price received from parent */}
      <p className="text-lg font-semibold text-white mb-4">
        {price}
      </p>

      {/* Button text from parent */}
      <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
        {buttonText}
      </button>

    </div>
  )
}



/*********************************************************************

SECTION 2 — PARENT COMPONENT
File: App.jsx

This component SENDS data to Card using PROPS.

*********************************************************************/

function App() {

  /*
  This component creates multiple cards.

  Instead of writing new HTML every time,
  we reuse the Card component and send different data.
  */

  return (

    <div className="min-h-screen bg-gray-900 flex items-center justify-center gap-6 p-10">

      {/* Card 1 */}
      <Card
        title="Starter Plan"
        description="Perfect for beginners learning React"
        price="$9/month"
        buttonText="Start Learning"
        bgColor="bg-blue-600"
      />

      {/* Card 2 */}
      <Card
        title="Pro Plan"
        description="Best plan for developers"
        price="$29/month"
        buttonText="Upgrade Now"
        bgColor="bg-purple-600"
      />

      {/* Card 3 */}
      <Card
        title="Enterprise Plan"
        description="Advanced plan for teams"
        price="$99/month"
        buttonText="Contact Sales"
        bgColor="bg-green-600"
      />

    </div>
  )
}



/*********************************************************************

SECTION 3 — DATA FLOW EXPLANATION

React uses ONE-WAY DATA FLOW.

Parent Component (App.jsx)
        ↓
sends props
        ↓
Child Component (Card.jsx)
        ↓
Displays UI using that data


Example Flow:

App.jsx writes:

<Card title="Pro Plan" />

React sends:

title = "Pro Plan"

Card.jsx receives it:

function Card({ title })

Then displays it:

<h2>{title}</h2>


Final Output:

Pro Plan


*********************************************************************/



/*********************************************************************

SECTION 4 — WHY PROPS ARE IMPORTANT

Props make components REUSABLE.

Instead of writing this:

<div>Starter Plan</div>
<div>Pro Plan</div>
<div>Enterprise</div>

We write ONE component:

<Card />

Then reuse it many times.


*********************************************************************/



/*********************************************************************

SECTION 5 — VISUAL FLOW

App.jsx (Parent)
   |
   | sends props
   |
   v
Card.jsx (Child)
   |
   | renders UI
   |
   v
User sees cards on screen


*********************************************************************/