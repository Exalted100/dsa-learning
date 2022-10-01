mod dsa;

use dsa::{count_apples_and_oranges::count_apples_and_oranges, kangaroo::kangaroo, forming_magic_square::forming_magic_square, viral_advertising::viral_advertising};

fn main() {
    println!("Hello, world!");
    count_apples_and_oranges(7, 10, 4, 12, &[2, 3, -4], &[3, -2, -4]);
    kangaroo(14, 4, 98, 2);

    let mut vec1 = Vec::from([4, 5, 8]);
    let mut vec2 = Vec::from([2, 4, 1]);
    let mut vec3 = Vec::from([1, 9, 7]);
    forming_magic_square(&[vec1, vec2, vec3]);
    viral_advertising(5);
}
