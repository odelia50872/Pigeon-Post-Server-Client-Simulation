# 🕊️ Pigeon Post – Server-Client Communication Simulation

**Pigeon Post** is a unique, visual simulation designed to demonstrate the fundamental concepts of **Server-Client communication** on the web.

Instead of using modern terms like "HTTP Requests" and "Data Packets," this project takes us back in time to a charming village where communication happens through personal, trained pigeons, routed through a central dovecote (the server).

---
## 🌐 Live Application
* **Frontend :** [pigeon-post-server-client-simulatio.vercel.app]
* **Source Code:** [https://github.com/odelia50872/Pigeon-Post-Server-Client-Simulation.git](https://github.com/odelia50872/Pigeon-Post-Server-Client-Simulation.git)

---

## 📸 The Concept: From Pixel to Packet

Here is the visual representation of our simulated village, showing the clients (the houses) and the main routing hub (the dovecote).

<img width="1913" height="863" alt="image" src="https://github.com/user-attachments/assets/9c20cc45-a0b0-4f8a-8521-db13fbfe294b" />

---

## 🏗️ Technical Metaphors: How it Works

The core of this project is to create an intuitive analogy for technical web concepts:

### 1. The Clients (The Houses) 🏠
Each house represents a user (Client). They have a "address" (IP) and a specific owner. In the interface, you can compose a message (Request) to another villager.

### 2. The Server (The Dovecote) 🐦🏠
The dovecote is the central hub (the Server). It receives every incoming pigeon, "reads" the destination address on the message, and reroutes the pigeon to the correct house.

### 3. Data Packets (The Pigeons) 🕊️
A data request is not sent all at once; it's split into "packets." In this simulation, each pigeon is a packet carrying a piece of your message.

### 4. Latency & Network Flow
The time it takes for a pigeon to fly from a house to the dovecote mimics **Network Latency**—the delay between a request being sent and received.

---

## 🚀 Key Learning Objectives

This simulation visually demonstrates critical full-stack engineering principles:

* **The Request-Response Cycle:** A house sends a message (Request) and waits for a response from the central dovecote (Server).
* **Network Routing:** How the server determines the correct destination based on an address.
* **Asynchronous Flow:** Mimicking how data travels across the network at different speeds.
* **Packet Switching (Future Scope):** Demonstrating what happens if multiple pigeons (packets) arrive at different times and need to be reassembled.

---

## 📂 Project Architecture

```text
project/
├── index.html            # The main interface (Pigeon Post Village)
├── css/                  # Layout and stylized village components
│   └── style.css
├── js/           
│   ├── village.js        # Logic for the clients (the houses)
│   ├── server.js         # Central routing logic (the dovecote)
│   └── main.js           # Simulation orchestration
├── images/               # Images and icons (Houses, Dovecote, Pigeons)
│   └── pigeon_post_village.png
└── README.md
