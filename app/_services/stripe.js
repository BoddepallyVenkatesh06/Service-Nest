"use server"

import Stripe from 'stripe';
import { redirect } from 'next/navigation';


export const checkoutOrder = async (order) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const price = order.price ? Number(order.price) * 100 : 0;
  let redirectPath = null

  try {

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            unit_amount: price,
            product_data: {
              name: order.name,
              images: order.images && order.images.length > 0 ? order.images.map(image => image.url) : [],
            }
          },
          description: order.about,
          quantity: 1
        },
      ],
      metadata: {
        eventId: order.eventId,
        buyerId: order.buyerId,

        businessId: order.businessId,
        date: order.date,
        time: order.time,
        userEmail: order.userEmail,
        userName: order.userName,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/mybooking`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    console.log("payment url => ", session.url)
    redirectPath = session.url
  } catch (error) {
    console.log('Error while order checkout => ', error)
  } finally {
    if (redirectPath) {
      redirect(redirectPath)
    }
    else {
      console.log("payment link not found")
    }
  }
}