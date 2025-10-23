import React, { useState } from 'react';
import Layout from './components/Layout';
import AdList from './components/AdList';
import './App.css';

function App() {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: 'Notebook Gamer',
      description: 'Notebook com placa de vídeo dedicada, 16GB RAM, SSD 512GB',
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      price: 3500.00
    },
    {
      id: 2,
      title: 'Smartphone Premium',
      description: 'Smartphone com câmera tripla, 128GB de armazenamento',
      imageUrl: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      price: 2200.00
    },
    {
      id: 3,
      title: 'Fones de Ouvido Bluetooth',
      description: 'Fones de ouvido sem fio com cancelamento de ruído',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      price: 350.00
    },
  ]);

  const handleAdBuy = (adId) => {
    const ad = ads.find(ad => ad.id === adId);
    alert(`Você comprou: ${ad.title} por R$${ad.price}`);
  };

  return (
    <Layout 
      headerTitle="Anúncios Online" 
      headerSubtitle="Encontre os melhores produtos com os melhores preços"
      footerCompanyName="Anúncios Online"
    >
      <AdList ads={ads} onAdBuy={handleAdBuy} />
    </Layout>
  );
}

export default App;