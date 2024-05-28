import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./signup.styles";
import { COLORS, SIZES } from "../constraints";
import { Formik } from "formik";

import * as Yup from "yup";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  names: Yup.string().required("Full Name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  location: Yup.string().required("Location is required"),
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecreText] = useState(false);
  const handleSignup = async (values) => {
    try {
      setLoader(true);

      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);

        navigation.navigate("Login");
      } else {
        console.error("Signup failed:", data);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={{ height: SIZES.height }}>
          <View style={style.viewContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={{ resizeMode: "contain", width: 115, height: 35 }}
            />
            <Text style={style.title}> Assit Platfrom</Text>
          </View>

          <View>
            <Text>Register with Us</Text>
            <Formik
              initialValues={{
                email: "",
                password: "",
                phone: "",
                location: "",
                names: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSignup}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                setFieldTouched,
                touched,
              }) => (
                <View>
                  <View style={style.wrapper}>
                    <Text style={style.label}>Full Name</Text>
                    <View
                      style={style.inputWrapper(
                        touched.names ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="face-man-outline"
                        size={20}
                        color={COLORS.gray}
                        style={style.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter full names"
                        onFocus={() => {
                          setFieldTouched("names");
                        }}
                        onBlur={() => {
                          setFieldTouched("names", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={values.names}
                        onChangeText={handleChange("names")}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.names && errors.names && (
                      <Text style={style.errorMessage}>{errors.names}</Text>
                    )}
                  </View>

                  <View style={style.wrapper}>
                    <Text style={style.label}>Email</Text>
                    <View
                      style={style.inputWrapper(
                        touched.email ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color={COLORS.gray}
                        style={style.iconStyle}
                      />

                      <TextInput
                        placeholder="Enter your email"
                        onFocus={() => {
                          setFieldTouched("email");
                        }}
                        onBlur={() => {
                          setFieldTouched("email", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={style.errorMessage}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={style.wrapper}>
                    <Text style={style.label}>Password</Text>
                    <View
                      style={style.inputWrapper(
                        touched.password ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        color={COLORS.gray}
                        style={style.iconStyle}
                      />
                      <TextInput
                        secureTextEntry={obsecureText}
                        placeholder="Enter password"
                        onFocus={() => {
                          setFieldTouched("password");
                        }}
                        onBlur={() => {
                          setFieldTouched("password", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(password) => {
                          handleChange("password")(password);
                        }}
                        value={values.password}
                        style={{ flex: 1 }}
                      />

                      <TouchableOpacity
                        onPress={() => {
                          setObsecreText(!obsecureText);
                        }}
                      >
                        <MaterialCommunityIcons
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={style.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={style.wrapper}>
                    <Text style={style.label}>Location</Text>
                    <View
                      style={style.inputWrapper(
                        touched.location ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <Ionicons
                        name="location-outline"
                        size={20}
                        color={COLORS.gray}
                        style={style.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter location"
                        onFocus={() => {
                          setFieldTouched("location");
                        }}
                        onBlur={() => {
                          setFieldTouched("location", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.location && errors.location && (
                      <Text style={style.errorMessage}>{errors.location}</Text>
                    )}
                  </View>

                  <View style={style.wrapper}>
                    <Text style={style.label}>Phone</Text>
                    <View
                      style={style.inputWrapper(
                        touched.email ? COLORS.secondary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="phone-outline"
                        size={20}
                        color={COLORS.gray}
                        style={style.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter phone number"
                        onFocus={() => {
                          setFieldTouched("phone");
                        }}
                        onBlur={() => {
                          setFieldTouched("phone", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={values.phone}
                        onChangeText={handleChange("phone")}
                        style={{ flex: 1 }}
                      />
                    </View>
                    {touched.phone && errors.phone && (
                      <Text style={style.errorMessage}>{errors.phone}</Text>
                    )}
                  </View>
                  <Button
                    loader={loader}
                    title={"s i g n u p"}
                    onPress={handleSignup}
                    isValid={isValid}
                  ></Button>
                  <Text
                    style={[style.registration, style.registerLink]}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Do you have an account clik here to Login?
                  </Text>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
