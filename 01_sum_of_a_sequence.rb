def sequence_sum(begin_number, end_number, step)
  (begin_number..end_number).step(step).sum
end

puts sequence_sum(2, 2, 2)      #2
puts sequence_sum(2, 6, 2)      #12
puts sequence_sum(1, 5, 1)      #15
puts sequence_sum(1, 5, 3)      #5
puts sequence_sum(158, 14, 95)  #0