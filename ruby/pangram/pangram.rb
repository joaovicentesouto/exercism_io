class Pangram

  def self.pangram? (phrase)
    phrase.downcase!
    ('a'..'z').all? { |letter| phrase.include? letter }
    # Inspired by danhubbard: http://exercism.io/submissions/7d52bf4ee8224d3590235703353ef9ad
  end

end

module BookKeeping
  VERSION = 4
end
