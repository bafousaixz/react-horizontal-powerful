import React from 'react'

import { ExampleComponent } from 'react-horizontal-powerful'
import 'react-horizontal-powerful/dist/index.css'

const data = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/800px-Eo_circle_blue_number-1.svg.png',
    title: 'string',
    desc: 'string',
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png',
    title: 'string',
    desc: 'string',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwe1oJC-5WW6Z04dt3RZPjKBI6opE2V2wzSr2ET8O-AmwfY_g55EIIK84n7ML0RHU4MlM&usqp=CAU',
    title: 'string',
    desc: 'string',
  },
];

const App = () => {
  return <ExampleComponent values={data} />
}

export default App
