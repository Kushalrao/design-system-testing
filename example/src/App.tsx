import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { StayCard, Typography } from 'design-system';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Typography variant="h1" color="primary">
            Featured Stays
          </Typography>
          <Typography variant="body" color="secondary" style={styles.subtitle}>
            Discover amazing hotels for your next trip
          </Typography>
        </View>

        {/* StayCard - Hilton */}
        <StayCard
          title="Hilton New York Fashion District"
          location="Miami/ Brickell"
          price="Rs 14,282"
          rating={5}
          image={{
            uri: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
          }}
          moreAmenities="+ 8 More with Deluxe"
        />

        {/* StayCard - Grand Hotel */}
        <StayCard
          title="Grand Hotel & Spa"
          location="Beach Resort, Goa"
          price="Rs 32,500"
          rating={5}
          image={{
            uri: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
          }}
          moreAmenities="+ 12 More with Premium"
          style={styles.card}
        />

        {/* StayCard - Boutique Hotel */}
        <StayCard
          title="Boutique Heritage Hotel"
          location="Jaipur, Rajasthan"
          price="Rs 18,750"
          rating={4}
          image={{
            uri: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
          }}
          moreAmenities="+ 6 More with Deluxe"
          style={styles.card}
        />

        {/* StayCard - City Hotel */}
        <StayCard
          title="City Central Suites"
          location="Mumbai, Maharashtra"
          price="Rs 12,000"
          rating={4}
          image={{
            uri: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
          }}
          moreAmenities="+ 5 More"
          style={styles.card}
        />

        {/* StayCard - Luxury Resort */}
        <StayCard
          title="Luxury Beach Resort"
          location="Maldives"
          price="Rs 45,000"
          rating={5}
          image={{
            uri: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
          }}
          moreAmenities="+ 15 More with All-Inclusive"
          style={styles.card}
        />

        {/* Footer Spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 24,
  },
  subtitle: {
    marginTop: 8,
  },
  card: {
    marginTop: 24,
    alignSelf: 'center',
  },
  footer: {
    height: 40,
  },
});
