import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { logoSvgString } from "../constants/logoSvg";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBar}>
        <SvgXml xml={logoSvgString} width="147" height="72" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <LinearGradient
          colors={["#F5F9FC", "#F5F9FC", "#DDE5EC"]}
          locations={[0, 0.65, 1]}
          style={styles.gradientBackground}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Text style={styles.title}>Bienvenido</Text>

              <Text style={styles.label}>Correo</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="#657486"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="nombre@kenmeina.com"
                  placeholderTextColor="#657486"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.passwordHeader}>
                <Text style={styles.labelInline}>Contraseña</Text>
                <TouchableOpacity>
                  <Text style={styles.forgotText}>
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color="#657486"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••••••"
                  placeholderTextColor="#657486"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={18}
                    color="#657486"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  headerBar: {
    height: 96,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 10,
  },
  gradientBackground: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    maxWidth: 420,
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderWidth: 1,
    borderColor: "#DDE5EC",
    shadowColor: "#1677C8",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1677C8",
    textAlign: "center",
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
    marginBottom: 8,
  },
  labelInline: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },
  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 8,
  },
  forgotText: {
    fontSize: 12,
    color: "#548FDF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D980",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#212D38",
    backgroundColor: "transparent",
    borderWidth: 0,
    ...Platform.select({
      web: {
        outlineStyle: "none",
      } as any,
    }),
  },
  button: {
    backgroundColor: "#A8D636",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  buttonText: {
    color: "#212D38",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
