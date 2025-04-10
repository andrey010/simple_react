#!/bin/bash

# A simple script to calculate Simple Interest

# Function to calculate simple interest
calculate_simple_interest() {
    principal=$1
    rate=$2
    time=$3
    interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
    echo "Simple Interest: $interest"
}

# Read inputs from the user
echo "Enter the principal amount:"
read principal

echo "Enter the rate of interest (as a percentage):"
read rate

echo "Enter the time period (in years):"
read time

# Call the function to calculate simple interest
calculate_simple_interest $principal $rate $time
