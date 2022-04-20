"""
The h-index is a metric that measures both the productivity and citation impact of a researcher.
A researcher's h-index is the largest number h, such that the researcher has published h papers that
have each been cited h times.

BigO:
    By sorting list solution computes in O(n log n) as opposed to O(n^2).

"""
from typing import List


def h_index(citations: List[int]) -> int:
    citations.sort()
    n = len(citations)
    for i, c in enumerate(citations):
        if c >= n - i:
            return n - i
    return 0


listOfPapers = [1, 4, 2, 5, 6, 3, 5]
print(h_index(listOfPapers))
