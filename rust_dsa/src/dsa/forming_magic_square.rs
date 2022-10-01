// https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true

use std::collections::{HashSet, HashMap};
use std::fmt::Display;
use std::vec::Vec;

pub fn forming_magic_square(s: &[Vec<i32>]) -> i32 {
    let mut numbers: HashSet<i32> = HashSet::new();
    let mut existing_numbers: HashSet<i32> = HashSet::new();
    let mut missing_numbers: Vec<i32> = Vec::new();
    let mut repeated_numbers: HashMap<i32, i32> = HashMap::new();
    let mut optimized_moves = 0;

    for vector in s.iter() {
        for number in vector.iter() {
            existing_numbers.insert(*number);
        }
    }

    for n in 1..10 {
        if !existing_numbers.contains(&n) {
            missing_numbers.push(n);
        }
    }

    for vector in s.iter() {
        for number in vector.iter() {
            if numbers.contains(number) {
                let mut check_number = number.clone();
                let get_hash_map_value = repeated_numbers.get(number);
                let number_to_use = match get_hash_map_value {
                    Some(n) => *n,
                    None => 0
                };
                repeated_numbers.insert(*number, number_to_use + 1);
            } else {
                numbers.insert(*number);
            }
        }
    }

    for n in 1..10 {
        let mut vector_index = 0;
        let number_under_consideration = match repeated_numbers.get(&n) {
            Some(t) => *t,
            None => 0
        };
        if number_under_consideration > 0 {
            for x in 1..=number_under_consideration {
                optimized_moves = optimized_moves + (n - missing_numbers[vector_index]).abs();
                vector_index = vector_index + 1;
            }
        }
    }

    println!("optimized moves: {}", optimized_moves);

    return optimized_moves;
}