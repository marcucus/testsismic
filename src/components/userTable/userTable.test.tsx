
import { render, screen } from "@testing-library/react";
import UserTable from "./userTable";
import { User } from "../../types/User";

const mockUsers: User[] = [
  { id: 1, name: "Marques", email: "marques@sismic.fr", age: 23, isActive: true },
  { id: 2, name: "Adri", email: "adri@sismic.fre", age: 32, isActive: false },
];

test("displays users in a table", () => {
  render(<UserTable users={mockUsers} onDelete={() => {}} />);
  expect(screen.getByText("Marques")).toBeInTheDocument();
  expect(screen.getByText("Adri")).toBeInTheDocument();
});