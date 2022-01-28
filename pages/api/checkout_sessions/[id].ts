import { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'
const stripe = new Stripe("sk_test_51IIbumKCclKMvAZGpX63ZRPvzLlgoowr3pzggWCjX0tHeC8pOZok4FfotP9wmURMZzkAU8GwIHIXYQ2WZXdmV1fF00JYwFhivH"!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id: string = req.query.id as string
  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.')
    }
    const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(
      id,
      { expand: ['payment_intent'] }
    )

    res.status(200).json(checkout_session)
  } catch (err:any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}