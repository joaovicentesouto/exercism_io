class Squares

  attr_accessor :number

  def initialize(number)
    @number = number
  end

  def square_of_sum
    foo = [*0..@number].inject do |a, number|
      a + number
    end
    
    foo ** 2
  end

  def sum_of_squares
    foo = [*0..@number].inject do |a, number|
      a + (number ** 2)
    end
  end

  def difference
    square_of_sum() - sum_of_squares()
  end

end

module BookKeeping
  VERSION = 3
end
