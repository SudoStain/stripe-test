/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51IIbumKCclKMvAZGCyST92Vflq2l5z3MMGe3HxyZ0bY63XHxs3VCIkXDyM0iN1tziVmLEaWJGNyOYxofOuzxqhEC00sIF0Qdht"!)
  }
  return stripePromise
}

export default getStripe