import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, Switch, ScrollView } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  function handleRegistrar() {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Digite seu nome de desenvolvedor.');
      return;
    }
    Alert.alert('Credencial registrada', `Desenvolvedor: ${nome}`);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text style={styles.headerTitle} selectable={true}>
            DevBadge Profile</Text>
        </View>

        <View style={styles.textComposition}>
          <Text style={styles.baseText}>Status do Sistema: <Text style={styles.highlightText}>Online</Text></Text>
        </View>

        <View style={styles.logo}>
          <Text style={styles.logoText}>⚛️</Text>
        </View>

        <Text
          style={styles.hintText}
          onPress={() => console.log("Pressionamento rapido")}
          onLongPress={() => Alert.alert('Dica', 'Preencha seus dados abaixo.')}
        >
          (Pressione e segure para dicas)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de desenvolvedor..."
          placeholderTextColor="#6e7681"
          value={nome}
          onChangeText={setNome}
        />

        <View style={styles.buttonWrapper}>
          <Button title="REGISTRAR CREDENCIAL" color="#58A6FF" onPress={handleRegistrar} />
        </View>

        <View style={styles.card}>
          <Text style={styles.baseText}>Ativar Modo Admin?</Text>
          <Switch
            value={isAdmin}
            onValueChange={setIsAdmin}
            trackColor={{ false: '#3a3f47', true: '#3FB950' }}
            thumbColor="#fff"
          />
        </View>

        <Text style={[styles.badge, isAdmin ? styles.badgeAdmin : styles.badgeBasic]}>
          {isAdmin ? 'Acesso Total (Admin)' : 'Acesso Básico'}
        </Text>

        {[1, 2, 3, 4].map((n) => (
          <Text
            key={n}
            style={styles.element}
            onPress={() => Alert.alert('Elemento ' + n, 'Pressionamento rápido')}
            onLongPress={() => Alert.alert('Elemento ' + n, 'Pressionamento longo')}
          >
            Elemento {n}
          </Text>
        ))}
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  content: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#58A6FF',
    backgroundColor: '#0D1117',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#3FB950'
  },
  textComposition: {
    marginBottom: 20
  },
  baseText: {
    color: '#fff',
    fontSize: 16
  },
  highlightText: {
    color: '#3FB950',
    fontWeight: 'bold'
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#21262d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  logoText: {
    fontSize: 44
  },
  hintText: {
    color: '#8b949e',
    fontSize: 12,
    marginBottom: 20
  },
  input: {
    width: '90%',
    height: 48,
    backgroundColor: '#161B22',
    color: '#fff',
    borderWidth: 2,
    borderColor: '#58A6FF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12
  },
  buttonWrapper: {
    width: '90%',
    marginBottom: 20
  },
  card: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 20
  },
  badge: {
    fontSize: 12,
    fontWeight: 'bold',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 6
  },
  badgeBasic: {
    color: '#c9d1d9',
    borderColor: '#3a3f47'
  },
  badgeAdmin: {
    color: '#3FB950',
    borderColor: '#3FB950'
  },
  element: {
    width: 115,
    paddingVertical: 18,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#58A6FF',
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: '#58A6FF',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden'
  }
});
