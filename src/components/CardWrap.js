import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function CardWrap(props) {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
