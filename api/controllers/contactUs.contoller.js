import prisma from "../lib/prisma.js";

export const contactUs = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contactMessage = await prisma.Contact.create({
      data: { name, email, message },
    });

    return res.status(201).json({
      message: "Your message has been received. We will contact you soon.",
      contactMessage,
    });
  } catch (error) {
    console.error("Error in contactUs:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
};
