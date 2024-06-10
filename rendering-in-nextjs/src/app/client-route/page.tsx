"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/ThemeProvider";

export default function ClientSideRouting() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>;
}