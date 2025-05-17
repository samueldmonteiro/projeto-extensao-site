import CartesianPlane from "../pages/Subjects/CartesianPlane";
import TrigonometricCircle from "../pages/Subjects/TrigonometricCircle";

export const data = {

  subjects: [
    {
      name: 'Círculo Trigonométrico',
      page: <TrigonometricCircle />
    },

    {
      name: 'Plano Cartesiano',
      page: <CartesianPlane />
    }
  ]
}