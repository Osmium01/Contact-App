import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch the contacts from the phone or API
    fetchContacts();
  }, []);

  
  const fetchContacts = () => {
    // Simulating API call to fetch contacts
    const mockContacts = [
      { name: "Arjun", number: "12345678990" },
      { name: "Arjuna", number: "09876543321" },
      { name: "John Doe", number: "98765432110" },
      { name: "Jane Doe", number: "01234536789" },
      { name: "Alice Smith", number: "11111161111" },
      { name: "Bob Johnson", number: "22222222272" },
      { name: "Charlie Brown", number: "33333333339" },
      { name: "David Miller", number: "44444444445" },
      { name: "Emily Davis", number: "55555555555" },
      { name: "Frank Wilson", number: "66646666666" },
      { name: "Grace Taylor", number: "777777771377" },
      { name: "Henry Anderson", number: "88888388222888" },
      { name: "Isabella Lee", number: "99999949111999" },
      { name: "Jack Walker", number: "1010150111010" },
      { name: "Katie Clark", number: "121212122212" },
      { name: "Leo Hill", number: "131313113513" },
      { name: "Mia Lewis", number: "14141411414" },
      { name: "Noah Turner", number: "151516515115" },
      { name: "Olivia Wright", number: "16161611616" },
      { name: "Peter Mitchell", number: "17171171717" },
      { name: "Quinn Young", number: "18181818218" },
      { name: "Rachel Harris", number: "19191911919" },
      { name: "Samuel Walker", number: "20203202020" },
      { name: "Tina Martinez", number: "21212122121" },
      { name: "Uma Rodriguez", number: "22222222322" },
      { name: "Victor Adams", number: "2323232323" },
      { name: "Wendy Baker", number: "24243242424" },
      { name: "Xavier Carter", number: "2525252525" },
      { name: "Yara Scott", number: "24626262626" },
      { name: "Zachary Turner", number: "42727272727" },
      { name: "Abigail Brown", number: "32828282828" },
      { name: "Benjamin Garcia", number: "22929292929" },
      { name: "Chloe Martinez", number: "13030303030" },
      { name: "Daniel Thompson", number: "31313131319" },
      { name: "Emily Clark", number: "32323232328" },
      { name: "Finn Davis", number: "33333333337" },
      { name: "Gabriella Lopez", number: "34343436434" },
      { name: "Henry Wright", number: "35353535355" },
      { name: "Isabella Lewis", number: "36363463636" },
      { name: "Jacob Smith", number: "37373733737" },
      { name: "Katherine Johnson", number: "38382383838" },
      { name: "Liam Martinez", number: "39393193939" },
    ];

    setContacts(mockContacts);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleModalDismiss = () => {
    setSelectedContact(null);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <TextInput
  style={{
    padding: 10,
    borderWidth: 3,
    borderColor: 'blue',
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  }}
  value={searchQuery}
  onChangeText={(text) => setSearchQuery(text)}
/>



<FlatList
  data={filteredContacts}
  keyExtractor={(item) => item.number} // Use 'number' as the key
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleContactClick(item)}>
      <View style={{ marginTop: 20}}>
        <Text style={{ color: "white", fontSize: 16, marginLeft: 15 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )}
/>





      <Modal
        visible={selectedContact !== null}
        onRequestClose={handleModalDismiss}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {selectedContact?.name}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            {selectedContact?.number}
          </Text>
          <TouchableOpacity
            onPress={handleModalDismiss}
            style={{ marginTop: 20 }}
          >
            <Text style={{ color: "red", fontSize: 16 }}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ContactsApp;
