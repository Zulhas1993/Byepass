"use client";
import { builder, Builder } from "@builder.io/react";
import ButtonSection from "./components/ButtonSection/buttonSection";
import Counter from "./components/Counter/Counter";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import FooterComponent from "./components/FooterSection/footerSection";
import PasswordManagerBanner from "./components/BannerSection/BannerSection";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(ButtonSection, {
  name: "ButtonSection",
});

Builder.registerComponent(FeatureSection, {
  name: "FeatureSection",
});

Builder.registerComponent(FooterComponent, {
  name: "FooterComponent",
});

Builder.registerComponent(PasswordManagerBanner, {
  name: "PasswordManagerBanner",
});
